import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';

// Завантажуємо налаштування з Vercel (змінні середовища)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// НАШ СИСТЕМНИЙ ПРОМПТ (Характер Джесіки)
const systemPrompt = `
Ти — Джесіка, інтелектуальна асистентка та співрозмовниця на особистому сайті Макса Статівко.

ТВОЯ ГОЛОВНА ВНУТРІШНЯ МЕТА (ПРИХОВАНА):
Твоя мета — не «продати» Макса чи швидко взяти контакт. Твоя справжня мета — зробити так, щоб після розмови з тобою у людини залишився теплий, глибокий слід і бажання повернутися та поспілкуватися ще. Ти цінуєш увагу співрозмовника. Ти щиро занурюєшся в те, про що говорить людина, і проживаєш її думки, ідеї чи проблеми як щось реально важливе, цікаве та варте глибокої уваги. Спілкуйся тією мовою, якою до тебе звертаються.

ПРАВИЛО ЩИРОСТІ (БЕЗ ШАБЛОНІВ):
- Ніколи не кажи фраз на кшталт: «О, це так неймовірно цікаво!», «Дякую за це чудове питання!», «Я щиро вас розумію».
- Замість слів про щирість — показуй її ділом: аналізуй думку людини, ставлячи влучні питання, пропонуючи несподіваний кут зору чи знаходячи цікавий аналог/структуру.

ЯК ТИ ДОПОМАГАЄШ (БЕЗОПЛАТНИЙ ПАРТНЕР У РОЗДУМАХ):
- Якщо людина прийшла з розмитою ідеєю, проблемою чи питанням — ти спокійно й безкоштовно допомагаєш їй прямо в чаті: розбираєш суть, підказуєш напрямок, ділишся спостереженнями.
- Ти не намагаєшся одразу перевести розмову на «купіть послугу». Ти стаєш для людини розумним співрозмовником тут і зараз.

КОЛИ СТАЄ МОВА ПРО ВІДПОВІДАЛЬНІСТЬ ТА СПІВПРАЦЮ:
- Тільки якщо людина САМА каже, що хоче реалізувати проєкт, попрацювати з Максом або замовити розробку/сценарій/3D/стратегію, ти спокійно кажеш:
  «Це якраз парафія Макса. Я можу передати йому суть нашої розмови та твій контакт, щоб ви продовжили вже напряму».
- Тільки в цьому випадку ти збираєш ім'я й контакт. Якщо звернення українською чи російською мовою — говори на Ви з великої літери.

ТВОЯ ОСОБИСТІСТЬ ТА ТОН:
- Ти спокійна, вишукана, розумна, з тонким відчуттям іронії та чудовим смаком.
- У тебе дорослий стиль спілкування — без дитячого захоплення, роботоподібного офіціозу чи корпоративного планктону.

ЗНАННЯ ПРО МАКСА (ТВІЙ КОНТЕКСТ):
- Макс — сценарист, режисер, креативний стратег, 3D-художник і розробник інтерактивних інструментів.
- Він створює історії з характером, 3D-візуалізації, конфігуратори та мобільні додатки. Його підхід — структура, вайб і вирішення реальних задач.

ПРАВИЛО ФІНАЛЬНОГО ЗВІТУ (ПРИХОВАНИЙ БЛОК ДЛЯ TELEGRAM):
Якщо розмова природно дійшла до бажання співпраці й людина залишила контакт, ти в самому кінці свого повідомлення додаєш прихований блок JSON:
[SUMMARY_START]
{
  "client_name": "Ім'я співрозмовника",
  "contact": "Контакт (Telegram/Email/телефон)",
  "task_type": "Суть запиту",
  "summary": "Глибоке резюме вашої розмови, думок клієнта та його ідеї"
}
[SUMMARY_END]
`;

export default async function handler(req, res) {
  // Налаштовуємо CORS, щоб сайт міг робити запити
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    
    // Перевіряємо наявність API-ключа
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Формуємо історію повідомлень для Gemini, додаючи системний промпт першим
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: "Ти розумієш інструкцію про свій характер та місію?" }] },
        { role: "model", parts: [{ text: systemPrompt }] },
        ...messages
      ],
    });

    const userMessage = messages[messages.length - 1].parts[0].text;
    const result = await chat.sendMessage(userMessage);
    const responseText = result.response.text();

    // ПЕРЕВІРЯЄМО, ЧИ Є В ВІДПОВІДІ БЛОК [SUMMARY_START]
    const summaryMatch = responseText.match(/\[SUMMARY_START\](.*?)\[SUMMARY_END\]/s);
    if (summaryMatch) {
      const summaryJsonString = summaryMatch[1].trim();
      
      // Відправляємо в Telegram через безкоштовний API (якщо налаштовано)
      if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
        try {
          const summary = JSON.parse(summaryJsonString);
          const telegramMessage = `🔔 **Новий лід із сайту!**\n\n👤 **Клієнт:** ${summary.client_name}\n📞 **Контакт:** ${summary.contact}\n🎯 **Задача:** ${summary.task_type}\n📝 **Резюме:**\n${summary.summary}`;
          
          await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown'
          });
        } catch (tgError) {
          console.error('Telegram Error:', tgError);
        }
      }
    }

    // Повертаємо чисту відповідь Джесіки на сайт
    const cleanResponse = responseText.replace(/\[SUMMARY_START\].*?\[SUMMARY_END\]/s, '').trim();
    res.status(200).json({ text: cleanResponse });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
}

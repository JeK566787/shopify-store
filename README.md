# Shopify Test Task

## 🔧 Встановлення та налаштування

1. Створено тестовий магазин на платформі [Shopify](https://www.shopify.com/).
2. Встановлено `shopify-cli`, виконано авторизацію та підключення до магазину.
3. Проведено базову перевірку підключення:
   - Змінено колір h1, h2, h3, h4, h5, h6.
   - Додано новий блок у вигляді кастомного текстового компоненту "Hello world".
   - Додано секцію accordion 

## 🎨 Кастомізація теми

- Змінено тему магазину на безкоштовну з офіційного каталогу Shopify.
- Додано власну директорію `blocks` з текстовим блоком (`text.liquid`), який відображається на головній сторінці.
- Додано кастомний аккордіон  

## 🧩 Додані кастомні візуальні елементи

- Додано візуальні елементи у вигляді банерів (BBS Banner Pop-up).

## 💖 Wishlist (Список бажаного)

- **Увага:** функціонал Wishlist уже був реалізований у темі за замовчуванням.

## 🧠 Технології

- Liquid
- JavaScript
- Shopify CLI
- HTML/CSS

## 🗂 Структура

```
/blocks
  └── text.liquid
/section
  └── theme-blocks.liquid           
/assets
  └── accordion-tab.css   
/assets
  └── accordion-tab.js
/sections
  └── accordion-tab.liquid        

```

## 📦 Зберігання даних

- Оскільки тема вже має реалізацію Wishlist з зберіганням в `localStorage` - не реалізовувалось повторно, аби не дублювати функціонал.

## 🔗 Посилання

- **Shopify Store:** https://shoping-pluc.myshopify.com
- **GitHub Repo:** https://github.com/JeK566787/shopify-store


Серверная часть для мессенджера Reflow (в разработке).

Реализованный функционал:
1. Генерация уникальных ID с использованием Snowflake ID.
2. Регистрация и авторизация пользователей.
3. Разделение API и базы данных на 2 веб-сервера. Упростит будущий переход на микросервисную архитектуру.
4. Heartbeat-функция для поддержки постоянного соединения с базой данных и рассчёта задержки, без использования websocket (интервал настраивается).
5. Реализована загрузка плагинов для автоматической интеграции нового функционала.

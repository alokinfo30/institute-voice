-- Initialize all required databases
CREATE DATABASE IF NOT EXISTS eduable_main;
CREATE DATABASE IF NOT EXISTS eduable_users;
CREATE DATABASE IF NOT EXISTS eduable_content;
CREATE DATABASE IF NOT EXISTS eduable_analytics;
CREATE DATABASE IF NOT EXISTS eduable_doubts;
CREATE DATABASE IF NOT EXISTS eduable_notifications;
CREATE DATABASE IF NOT EXISTS eduable_payments;

-- Create application user with limited privileges
CREATE USER IF NOT EXISTS 'eduable_app'@'%' IDENTIFIED BY 'eduable_app_password';
GRANT ALL PRIVILEGES ON eduable_main.* TO 'eduable_app'@'%';
GRANT ALL PRIVILEGES ON eduable_users.* TO 'eduable_app'@'%';
GRANT ALL PRIVILEGES ON eduable_content.* TO 'eduable_app'@'%';
GRANT ALL PRIVILEGES ON eduable_analytics.* TO 'eduable_app'@'%';
GRANT ALL PRIVILEGES ON eduable_doubts.* TO 'eduable_app'@'%';
GRANT ALL PRIVILEGES ON eduable_notifications.* TO 'eduable_app'@'%';
GRANT ALL PRIVILEGES ON eduable_payments.* TO 'eduable_app'@'%';
FLUSH PRIVILEGES;
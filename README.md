## Getting Started

    First, create an SQL database that contains values such as id, senderName, senderEmail, recipientName, recipientEmail, and message.

    Second, set the database configuration in the .env file. Change the variables DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, and DB_TABLE with your local configuration.

    Third, run your MySQL or MariaDB server using XAMPP.

    Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Don't forget to open http://localhost:3000 with your browser to see the result.

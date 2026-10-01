# E-Commerce Sales Analytics Dashboard

An interactive e-commerce sales analytics dashboard built with React and TypeScript. The dashboard provides a visual overview of revenue, orders, customers, sales categories, and performance insights.

## Features

- 📊 Interactive sales dashboard
- 💰 Total revenue tracking
- 🛒 Total orders tracking
- 👥 Customer metrics
- 💵 Average order value
- 📈 Revenue trend visualization
- 🥧 Sales by category visualization
- 📅 Time-period filtering
  - Last 7 Days
  - Last 30 Days
  - Last 90 Days
  - Last 1 Year
- 💡 Dynamic performance insights
- 👤 Customer data table
- 📄 Customer table pagination
- 📱 Responsive dashboard layout
- 🎨 Collapsible sidebar navigation

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Material UI
- Chart.js
- React Chart.js 2
- Vite
- Git
- GitHub

## Dashboard Sections

### KPI Cards

The dashboard displays:

- Total Revenue
- Total Orders
- Customers
- Average Order Value

The values change based on the selected time period.

### Revenue Trend

The revenue chart changes according to the selected period:

| Period | Chart View |
|---|---|
| Last 7 Days | Daily revenue |
| Last 30 Days | Weekly revenue |
| Last 90 Days | Monthly revenue |
| Last 1 Year | Monthly revenue |

### Sales by Category

A pie chart provides a visual breakdown of sales across different product categories.

### Performance Insights

The dashboard displays summarized insights for:

- Revenue
- Orders
- Customers
- Average order value
- Category performance

### Customer Data

The customer table includes:

- Customer ID
- Name
- Email
- Number of orders
- Account status
- Actions

Pagination is included for navigating customer records.

## Project Structure

```text
src/
├── components/
│   ├── Card.tsx
│   ├── DashBoard.tsx
│   ├── Header.tsx
│   ├── Insights.tsx
│   ├── LineChart.tsx
│   ├── NavItem.tsx
│   ├── PieChart.tsx
│   ├── SectionHeader.tsx
│   ├── SideBar.tsx
│   └── Users.tsx
│
├── App.tsx
├── index.css
└── main.tsx

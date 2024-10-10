# 💰 Expense Control
This application allows users to manage their personal budget in an intuitive and dynamic way. It offers a modern interface where users can set a budget, record and organize their expenses, and get a clear view of their financial situation in real time.

## :star2: Features
- **Set an initial budget** to keep track of your expenses.
- **Add new expenses** with details like name, category, amount, and date.
- **Edit or delete expenses** easily with swipe animations.
- **Filter expenses by category**, enabling focused views.
- **Dynamic chart** to visually represent spending.
- **Reset button** to restart the app from scratch.
- **LocalStorage persistence**, so expense data remains even after refreshing the page.
- **Automatic calculation** of available budget and spent budget.

## :gear: Technologies Used
- **React with TypeScript:** For a robust, typed structure in managing components and states.
- **Vite:** For fast and efficient development.
- **Tailwind CSS:** For modern and flexible UI styling.

## :wrench: Performance Optimization
To enhance performance, I implemented:

- **useContext:** To share global states, like budget and expenses, across components.
- **useReducer:** For predictable and organized state management.
- **useMemo:** For performance optimization by memoizing computed values.
- **useState:** To manage local component states.
- **Custom Hooks:** Implemented reusable logic to simplify and organize the code.

## :globe_with_meridians: Site
**Site:** https://expense-control-sac.netlify.app/

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Expense-Control.git
```
### 2. Navigate to the project folder
```bash
cd expense-control
```
### 3. Install dependencies
```bash
npm install
```
### 4. Start the application
```bash
npm run dev
```
### 5. Build the application
```bash
npm run build
```
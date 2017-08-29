import dva from 'dva';
import { browserHistory } from 'dva/router'
import { message } from 'antd'
import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(error) {
    message.error(error.message || error.err.message)
  },
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

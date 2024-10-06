import express, { Request, Response } from 'express';
import {Category} from "./data/category";
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors())

app.get('/api/tasks', (req: Request, res: Response) => {
  res.json({
    test: "chuj",
    items: [
      {
        category: Category.UPCOMING,
        title: "Plan marketing campaign",
        tags: ["marketing", "chuj"],
        checklist: [
          {
            title: "Test",
            checked: false
          }
        ],
        users: ["w@w.pl"]
      },
      {
        category: Category.UPCOMING,
        title: "Plan marketing campaign",
        tags: ["marketing"],
        checklist: [
          {
            title: "Test",
            checked: false
          }
        ],
        users: ["w@w.pl"]
      }
    ],
    tags: {
      marketing: "#d52020",
      chuj: "#423432"
    },
    users: {
      "w@w.pl": {
        name: "Wiktor",
        avatar_url: "https://google.com/r.png"
      }
    }
  })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

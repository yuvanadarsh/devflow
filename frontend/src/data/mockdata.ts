import { type Project, type Note } from "../types/index";

// export interface Project {
//   name: string;
//   id: string;
//   status: ProjectStatus;
//   deadline: string;
//   pinned: boolean;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

export const projects: Project[] = [
  {
    name: "Project 1",
    id: "1",
    status: "In Progress",
    pinned: true,
    deadline: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae pariatur similique nemo natus ut iusto aut earum possimus dicta, veniam, saepe maxime error, eos nihil ratione omnis magnam sit officiis. Sapiente, magni. Amet eum ratione quis velit tempore iure? Dolor mollitia facere laborum culpa fuga, fugiat quisquam possimus tenetur illum minima, nostrum impedit eligendi, distinctio asperiores! At nobis similique obcaecati adipisci tempore nihil accusantium? Consectetur, tempora velit facilis labore aperiam doloremque asperiores optio distinctio natus autem reprehenderit, eius quibusdam, culpa alias a. Praesentium amet quod sapiente laboriosam illum, suscipit dolores. Obcaecati eum fuga animi dolorum? Tempora explicabo sequi doloribus?",
    created_at: "",
    updated_at: "",
  },
  {
    name: "Project 2",
    id: "2",
    status: "Completed",
    pinned: false,
    deadline: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae pariatur similique nemo natus ut iusto aut earum possimus dicta, veniam, saepe maxime error, eos nihil ratione omnis magnam sit officiis. Sapiente, magni. Amet eum ratione quis velit tempore iure? Dolor mollitia facere laborum culpa fuga, fugiat quisquam possimus tenetur illum minima, nostrum impedit eligendi, distinctio asperiores! At nobis similique obcaecati adipisci tempore nihil accusantium? Consectetur, tempora velit facilis labore aperiam doloremque asperiores optio distinctio natus autem reprehenderit, eius quibusdam, culpa alias a. Praesentium amet quod sapiente laboriosam illum, suscipit dolores. Obcaecati eum fuga animi dolorum? Tempora explicabo sequi doloribus?",
    created_at: "",
    updated_at: "",
  },
  {
    name: "Project 3",
    id: "3",
    status: "Backlog",
    pinned: false,
    deadline: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae pariatur similique nemo natus ut iusto aut earum possimus dicta, veniam, saepe maxime error, eos nihil ratione omnis magnam sit officiis. Sapiente, magni. Amet eum ratione quis velit tempore iure? Dolor mollitia facere laborum culpa fuga, fugiat quisquam possimus tenetur illum minima, nostrum impedit eligendi, distinctio asperiores! At nobis similique obcaecati adipisci tempore nihil accusantium? Consectetur, tempora velit facilis labore aperiam doloremque asperiores optio distinctio natus autem reprehenderit, eius quibusdam, culpa alias a. Praesentium amet quod sapiente laboriosam illum, suscipit dolores. Obcaecati eum fuga animi dolorum? Tempora explicabo sequi doloribus?",
    created_at: "",
    updated_at: "",
  },
];

// export interface Note {
//   id: string;
//   project_id: string;
//   title: string;
//   content: string;
//   type: string;
//   created_at: string;
//   updated_at: string;
// }

export const notes: Note[] = [
  {
    id: crypto.randomUUID(),
    project_id: crypto.randomUUID(),
    title: "Issue #1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae pariatur similique nemo natus ut iusto aut earum possimus dicta, veniam, saepe maxime error, eos nihil ratione omnis magnam sit officiis. Sapiente, magni. Amet eum ratione quis velit tempore iure? Dolor mollitia facere laborum culpa fuga, fugiat quisquam possimus tenetur illum minima, nostrum impedit eligendi, distinctio asperiores! At nobis similique obcaecati adipisci tempore nihil accusantium?",
    type: "Issue",
    created_at: "",
    updated_at: "",
  },

  {
    id: crypto.randomUUID(),
    project_id: crypto.randomUUID(),
    title: "Issue #2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae pariatur similique nemo natus ut iusto aut earum possimus dicta, veniam, saepe maxime error, eos nihil ratione omnis magnam sit officiis. Sapiente, magni. Amet eum ratione quis velit tempore iure? Dolor mollitia facere laborum culpa fuga, fugiat quisquam possimus tenetur illum minima, nostrum impedit eligendi, distinctio asperiores! At nobis similique obcaecati adipisci tempore nihil accusantium?",
    type: "Issue",
    created_at: "",
    updated_at: "",
  },
];

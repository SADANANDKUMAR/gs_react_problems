## 📌 Build a Persistent Todo List App (React + TypeScript)

Create a **Todo List application** using React where users can:

* Add new tasks
* Mark tasks as completed
* View all tasks
* Persist data even after page reload

---

## 📋 Requirements

### 1. Todo Structure

Each todo item should have:

* `id` (unique, generated using `uuid`)
* `label` (task name)
* `checked` (boolean → completed or not)

---

### 2. Initial State

You are given the following initial data:

<pre class="overflow-visible! px-0!" data-start="612" data-end="895"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">const</span><span></span><span class="ͼe">initialData</span><span>: </span><span class="ͼe">Todo</span><span>[] </span><span class="ͼ8">=</span><span> [</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼe">uuid</span><span>(),</span><br/><span>    label: </span><span class="ͼc">"Buy groceries"</span><span>,</span><br/><span>    checked: </span><span class="ͼb">false</span><span>,</span><br/><span>  },</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼe">uuid</span><span>(),</span><br/><span>    label: </span><span class="ͼc">"Reboot computer"</span><span>,</span><br/><span>    checked: </span><span class="ͼb">false</span><span>,</span><br/><span>  },</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼe">uuid</span><span>(),</span><br/><span>    label: </span><span class="ͼc">"Ace CoderPad interview"</span><span>,</span><br/><span>    checked: </span><span class="ͼb">true</span><span>,</span><br/><span>  },</span><br/><span>];</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

### ⚠️ Important Requirement (Persistence)

👉 Currently, this data reloads every time the page refreshes.

**Your task:**

* Save the todo list in **localStorage**
* Restore the todos from localStorage when the app loads

💡 Goal:

Ensure **persistent storage** so user data is not lost after refresh.

---

### 3. Add New Task

* Create an input component (`AddInput`)
* User can add a new todo
* New todo should:
* Appear at the **top**
* Be **unchecked by default**

---

### 4. Display Todo List

* Use:
* `TodoList` (wrapper component)
* `TodoItem` (individual item)

---

### 5. Toggle Task Completion

* Each todo has a checkbox
* On click:
* Toggle `checked` state
* Apply **line-through style** when completed

---

### 6. State Management

* Use **React Hooks**
* `useState`
* `useCallback`
* Follow **immutable updates**

---

### 7. Styling

* Use **@emotion/styled**
* Each todo item should:
* Be clickable
* Have spacing and clean UI
* Show line-through when checked

---

## ⚠️ Known Issues to Fix

* `handleChange` may use stale state
* Incorrect typing for `id` (`any` used)
* `useCallback` dependencies missing
* `onChange` typing mismatch
* No localStorage implementation

---

## 🧠 Bonus (Advanced)

* Prevent adding empty todos
* Add delete functionality
* Add filters (All / Completed / Pending)
* Optimize re-renders

---

## 🧪 Example UI

<pre class="overflow-visible! px-0!" data-start="2304" data-end="2423"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="w-full overflow-x-hidden overflow-y-auto pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Todo List</span><br/><br/><span>[ Add new task input ]</span><br/><br/><span>☐ Buy groceries  </span><br/><span>☑ Ace CoderPad interview  </span><br/><span>☐ Reboot computer  </span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

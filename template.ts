export function getTodayFormatDate() {
  const date = new Date()
  return date.toISOString().split('T')[0]
}
export function getMdTemplate(title: string = 'todoList') {
  const now = getTodayFormatDate()
  return `---
title: ${title}
date: ${now}
---

completed:

- [x] ${now}

undone:

- [ ] ${now}

res:

`
}

import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyC0qKmFyhzvI5eAgqMl9oR9fuF9nE6V1gQ',
  authDomain: 'portfolio-22a99.firebaseapp.com',
  databaseURL: 'https://portfolio-22a99.firebaseio.com',
  projectId: 'portfolio-22a99',
  storageBucket: '',
  messagingSenderId: '307297276569'
})

export const db = app.database()
export const tasks = db.ref('tasks')
export const backlog = tasks.child('backlog')
export const todo = tasks.child('todo')
export const doing = tasks.child('doing')
export const done = tasks.child('done')

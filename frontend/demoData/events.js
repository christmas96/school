export default [
  {
    id: 4,
    title: 'Математика',
    start: new Date(new Date().setHours((new Date().getDay() - 1) + 7)),
    end: new Date(new Date().setHours((new Date().getDay() - 1) + 8)),
  },
  {
    id: 4,
    title: 'Читання',
    start: new Date(new Date().setHours((new Date().getDay() - 1) + 6)),
    end: new Date(new Date().setHours((new Date().getDay() - 1) + 7)),
  },
  {
    id: 4,
    title: 'Укр мова',
    start: new Date(new Date().setHours((new Date().getDay() - 1) + 8)),
    end: new Date(new Date().setHours((new Date().getDay() - 1) + 9)),
  },
  {
    id: 5,
    title: 'Батьківські збори',
    start: new Date(new Date().setHours(new Date().getHours() - 14)),
    end: new Date(new Date().setHours(new Date().getHours() - 15)),
    desc: 'Батьківські збори',
  },
]

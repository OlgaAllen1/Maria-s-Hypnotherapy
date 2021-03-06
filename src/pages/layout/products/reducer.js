const initialState = {
  data: [
    {
      id: 1,
      name: 'Audio CD Self Hypnosis: Lean, Healthy and Strong Weight Management',
      description: 'Learn how to release stress, combat negative self-image, and lose weight to live a happy, healthy Life',
      price: '20.00'
    },
    {
      id: 2,
      name: 'Book',
      description: 'Blue',
      price: '20.00'
    },
    {
      id: 3,
      name: '1 hour of Hypnotherapy',
      description: 'Short session',
      price: '95.00'
    },
    {
      id: 4,
      name: '2 hours of Hypnotherapy',
      description: 'Long session',
      price: '180'
    }
  ]
}



export default (state = initialState, action) => {
  return state
}
const parseTextArray = textArray =>
  textArray.split(',').map(value => parseInt(value))

const getArrayOrdered = array =>
  fetch(`/array`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(array)
  }).then(response => response.json())

new Vue({
  el: '#app',
  data: {
    arrayText: '',
    arrayResult: null
  },
  methods: {
    showArrayOrdered() {
      const array = parseTextArray(this.arrayText)

      getArrayOrdered(array)
        .then(({ data }) => {
          this.arrayResult = data
        })
        .catch(console.error)
    }
  }
})

export const paginate = (array) => {
  const itemPerPage = 9
  const pages = Math.ceil(array.length / itemPerPage)
  console.log('number of pages: ', pages)

  // concat array
  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage
    return array.slice(start, start + itemPerPage)
  })

  return newArray
}
// export default paginate
/**
 * Chức năng của function này là khi ta truyền vào một array thì nó sẽ return về một array mà trong đó chứa các array con theo số item per page
 */

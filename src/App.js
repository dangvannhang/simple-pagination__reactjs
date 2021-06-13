import './App.css'
import { useFetch } from './components/useFetch'
import { useState, useEffect } from 'react'

function App() {
  const { loading, data } = useFetch()
  const [currentPage, setCurrentPage] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    if (loading) return
    setImages(data[currentPage])
  }, [loading, currentPage])

  const clickPage = (index) => {
    setCurrentPage(index)
  }

  const prevPage = () => {
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        return data.length - 1
      }
      return prevPage
    })
  }
  const nextPage = () => {
    setCurrentPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  return (
    <main className='app'>
      <section className='paginate-header'>
        <h2 className='main-title'>{loading ? 'Loading...' : 'Pagination'}</h2>
        <hr />
      </section>
      <section className='items-container'>
        {images.map((item, index) => {
          return (
            <article className='article-image' key={index}>
              {index}_{item.author}
            </article>
          )
        })}
      </section>
      {!loading && (
        <section className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            Prev
          </button>
          {data.map((item, index) => (
            <button
              key={index}
              className={`btn ${currentPage === index ? 'active-btn' : null}`}
              onClick={() => clickPage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button className='next-btn' onClick={nextPage}>
            Next
          </button>
        </section>
      )}
    </main>
  )
}

export default App

//

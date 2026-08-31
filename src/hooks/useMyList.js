import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyList, addMyListItem, updateMyListItem, deleteMyListItem } from '../services/api/mylist'
import { setMyList, addItem, updateItem, removeItem } from '../store/redux/myListSlice'

export default function useMyList() {
  const dispatch = useDispatch()
  const myList = useSelector((state) => state.myList)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMyList()
      .then((data) => dispatch(setMyList(data)))
      .catch((error) => console.error('Gagal ambil data Daftar Saya:', error.message))
      .finally(() => setIsLoading(false))
  }, [dispatch])

  function isInMyList(movieId) {
    return myList.some((entry) => entry.movieId === movieId)
  }

  async function addToMyList(item) {
    try {
      const newEntry = { movieId: item.id, title: item.title, image: item.image, watched: false }
      const saved = await addMyListItem(newEntry)
      dispatch(addItem(saved))
      return saved
    } catch (error) {
      console.error('Gagal menambah ke Daftar Saya:', error.message)
    }
  }

  async function removeFromMyList(recordId) {
    try {
      await deleteMyListItem(recordId)
      dispatch(removeItem(recordId))
    } catch (error) {
      console.error('Gagal menghapus dari Daftar Saya:', error.message)
    }
  }

  async function toggleWatched(recordId) {
    const entry = myList.find((item) => item.id === recordId)
    if (!entry) return

    try {
      const updated = await updateMyListItem(recordId, { watched: !entry.watched })
      dispatch(updateItem(updated))
    } catch (error) {
      console.error('Gagal update status ditonton:', error.message)
    }
  }

  function handleToggleMyList(item) {
    const existing = myList.find((entry) => entry.movieId === item.id)
    if (existing) {
      removeFromMyList(existing.id)
    } else {
      addToMyList(item)
    }
  }

  return {
    myList,
    isLoading,
    isInMyList,
    addToMyList,
    removeFromMyList,
    toggleWatched,
    handleToggleMyList,
  }
}

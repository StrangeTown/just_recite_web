
const Refresh = () => {
  const handleRefresh = () => {
    window.location.reload()
  }
  return (
    <div>
      <div onClick={handleRefresh}>
        Refresh
      </div>
    </div>
  )
}

export default Refresh
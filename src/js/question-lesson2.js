const getUsers = async () => {
  const res = await fetch('https://some-site')

  return await res.json()
}

getUsers().then()
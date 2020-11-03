const composeClassName = classes => {
  const theClasses = classes.filter(className => {
    return !!className
  })
  return theClasses.join(" ").trim()
}

export default composeClassName
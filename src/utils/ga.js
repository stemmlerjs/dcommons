
export const ga = (...args) => {
  if (window.ga) {
    window.ga(...args)
  }
  else {
    console.log(...args);
  }
}

export const event = (category, label, action = 'click') => {
  ga('send', 'event', category, action, label)
}

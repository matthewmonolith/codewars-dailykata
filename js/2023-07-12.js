function likeOrDislike(buttons) {
    return buttons.reduce((p,c) => c === p ? 'Nothing': c, 'Nothing')
   }
export const increaseQuantity = (itemId) => ({
    type: 'INCREASE_QUANTITY',
    itemId,
  });
  
  export const decreaseQuantity = (itemId) => ({
    type: 'DECREASE_QUANTITY',
    itemId,
  });
  
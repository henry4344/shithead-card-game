function handle5(playCard: number) {
  if (playCard <= 5) return true;
  else return false;
}

function handle7(playCard: number) {
  return;
}

export function checkMove(playCard: number, topCard: number) {
  if (topCard == 5) return handle5(playCard);
  if (topCard == 7) return handle7(playCard);

  if (playCard >= topCard) return true;
  return false;
}

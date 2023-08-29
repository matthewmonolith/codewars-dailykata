function meeting(rooms, need) {
    if (need <= 0) {
      return 'Game On';
    }
    const taken = [];
    for (const [{ length: chairs }, people] of rooms) {
      const take = Math.min(Math.max(people - chairs, 0), need);
      taken.push(take)
      need -= take;
      if (need <= 0) {
        return taken;
      }
    }
    return 'Not enough!';
  }
function getSize(width, height, depth){
    const area = 2 * (depth * width + width * height + height * depth);
      const volume = depth * width * height;
      return [area, volume];
    }
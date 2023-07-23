function findPath(tickets) {
    const graph = {};
    for (const [from, to] of tickets) {
      if (!graph[from]) graph[from] = [];
      graph[from].push(to);
    }
    for (const from in graph) {
      graph[from].sort();
    }
    const itinerary = ["A"];
    const visited = {};
    function dfs(node) {
      const destinations = graph[node];
      if (destinations) {
        for (let i = 0; i < destinations.length; i++) {
          const destination = destinations[i];
          const key = `${node}-${destination}`;
          if (!visited[key]) {
            visited[key] = true;
            itinerary.push(destination);
            dfs(destination);
          }
        }
      }
    }
    dfs("A"); 
    return itinerary;
  }
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); 
  console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]])); 
  console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]])); 
  
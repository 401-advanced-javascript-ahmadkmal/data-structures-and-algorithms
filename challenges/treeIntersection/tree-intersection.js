function tree_intersection(t1,t1){
    let results=[]
    const _traversal = (node1,node2) => {
        if(node1.value==node2.value){
          results.push(node.value);  
        }
        
        if (node1.left&&node2.left) _traversal(node1.left,node2.left);
        if (node1.right&&node2.right) _traversal(node1.right,node2.right);
      };
      _traversal(t1,t2)
    return results;
}
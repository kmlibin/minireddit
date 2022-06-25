
export const apiRoot = 'https://www.reddit.com';

export const getPostComments = async (permalink) => {
    const response = await fetch(`${apiRoot}${permalink}.json?limit=25`);
    const jsonResponse = await response.json();
  
    const listComments = jsonResponse[1].data.children.map(comment => comment.data);
    //last comment is just data from reddit, need to get rid of for the fdn to work (and just to not have a blank comment)
    listComments.pop();
    return listComments
  };

  
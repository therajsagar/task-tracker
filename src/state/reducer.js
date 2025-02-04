export const initialState = { list: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { data, categoryId } = action;
      const { title, time, description } = data;
      const payload = {
        id: time.toString(),
        title,
        creationTime: time,
        description,
        categoryId
      };

      return {
        list: state.list.map((info) => {
          if (info.id === categoryId) {
            return { ...info, tasks: info.tasks.concat(payload) };
          }
          return info;
        })
      };
    }
    case "REMOVE_TASK": {
      const { taskId, categoryId } = action;
      return {
        list: state.list.map((info) => {
          if (info.id === categoryId) {
            return {
              ...info,
              tasks: info.tasks.filter((i) => i.id !== taskId)
            };
          }
          return info;
        })
      };
    }
    case "ADD_LIST": {
      const { title, time } = action.data;
      const payload = {
        id: time.toString(),
        title,
        creationTime: time,
        tasks: []
      };
      return { list: state.list.concat(payload) };
    }
    case "REMOVE_LIST": {
      return { list: state.list.filter((i) => i.id !== action.categoryId) };
    }
    case "UPDATE_CATEGORY": {
      const { newCategoryId, prevCategoryId, taskId } = action;

      const payload = {
        ...state.list
          .find((i) => i.id === prevCategoryId)
          ?.tasks?.find((j) => j.id === taskId),
        categoryId: newCategoryId
      };

      return {
        list: state.list.map((info) => {
          if (info.id === prevCategoryId) {
            return {
              ...info,
              tasks: info.tasks.filter((i) => i.id !== taskId)
            };
          } else if (info.id === newCategoryId) {
            return { ...info, tasks: info.tasks.concat(payload) };
          }
          return info;
        })
      };
    }
    default:
      throw new Error();
  }
};

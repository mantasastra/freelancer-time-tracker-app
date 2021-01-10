import { useReducer, useEffect } from "react";

type State = {
  status: string;
  responseData: any;
  errorMessage: string | null;
};

interface StartAction {
  type: "START";
}

interface ResolveAction {
  type: "RESOLVE";
  responseData: any;
}

interface RejectAction {
  type: "REJECT";
  error: { error: string };
}

type Action = StartAction | ResolveAction | RejectAction;

function requestReducer(state: State, action: Action) {
  switch (action.type) {
    case "START": {
      return { status: "processing", responseData: null, errorMessage: null };
    }
    case "RESOLVE": {
      return {
        status: "processed",
        responseData: action.responseData,
        errorMessage: null,
      };
    }
    case "REJECT": {
      return {
        status: "failed",
        responseData: null,
        errorMessage: action?.error?.error,
      };
    }
  }
}

function useRequest({ endpoint }: { endpoint: string }) {
  const [state, dispatch] = useReducer(requestReducer, {
    status: "idle",
    responseData: null,
    errorMessage: null,
  });

  useEffect(() => {
    dispatch({ type: "START" });

    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "RESOLVE", responseData: data });
      } else {
        dispatch({ type: "REJECT", error: data });
      }
    });
  }, [endpoint]);

  return state;
}

export default useRequest;

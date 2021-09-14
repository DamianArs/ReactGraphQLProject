import * as React from "react";
import { useHistory } from "react-router";
import { useLazyQuery } from "@apollo/react-hooks";
import { NodesQuery, OneNodeQuery } from "../../graphql/queries";
import { Node } from "../../Types";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useState } from "react";
import { useCallback } from "react";
import { values } from "lodash";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../Store/actions";

export const NodesComponent: any = () => {
  const [stateNodes, setStateNodes] = useState([]);
  const [fetchNodes, fetchNodesProps] = useLazyQuery(NodesQuery);
  const [fetchOneNode, fetchOneNodeProps] = useLazyQuery(OneNodeQuery);
  const [braeadcrumb, setBreadcrumb] = useState<any>([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRoute = useCallback(
    (value: Node) => {
      fetchOneNode({
        variables: {
          parent: value.name,
        },
      });
      setBreadcrumb((prevstate: any) => [...prevstate, value.name]);
    },
    [fetchOneNodeProps.data]
  );

  React.useEffect(() => {
    fetchNodes({
      variables: {
        page: 1,
        perPage: 10,
      },
    });
  }, [fetchNodesProps.data]);

  React.useEffect(() => {
    if (fetchOneNodeProps.data) {
      setStateNodes(fetchOneNodeProps.data.items.nodes);
    }
    if (braeadcrumb) {
      dispatch(addBreadCrumb(braeadcrumb));
    }
  }, [handleRoute, braeadcrumb]);

  if (stateNodes.length === 0) {
    if (fetchNodesProps.data)
      return fetchNodesProps.data.items.map((one: Node) => (
        <div
          key={one.name}
          style={{ margin: "0 32px", display: "flex", alignItems: "center" }}
        >
          {one.nodes === null ? (
            <ArrowRightAltIcon />
          ) : (
            <PlaylistAddCheckIcon style={{ color: "#3f51b5" }} />
          )}
          <h3
            style={{
              marginLeft: "10px",
              color: one.nodes === null ? "black" : "#3f51b5",
            }}
            onClick={one.nodes ? () => handleRoute(one) : () => {}}
          >
            {one.name}
          </h3>
        </div>
      ));
    return null;
  } else {
    return stateNodes.map((one: Node) => (
      <div
        key={one.name}
        style={{ margin: "0 32px", display: "flex", alignItems: "center" }}
      >
        {one.nodes ? (
          <PlaylistAddCheckIcon style={{ color: "#3f51b5" }} />
        ) : (
          <ArrowRightAltIcon />
        )}
        <h3
          style={{
            marginLeft: "10px",
            color: one.nodes === null ? "black" : "#3f51b5",
          }}
          onClick={one.nodes ? () => handleRoute(one) : () => {}}
        >
          {one.name}
        </h3>
      </div>
    ));
  }
};

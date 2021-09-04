import React, { useState } from "react";
import { Dimensions } from "react-native";
import { SwipeablePanel } from "rn-swipeable-panel";

export const SwipableMenu = ({ isPanelActive, onClose, children, ...rest }) => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    onClose: () => onClose(),
    closeOnTouchOutside: true,
    rest,
  });

  return (
    <SwipeablePanel
      {...panelProps}
      isActive={isPanelActive}
      style={{
        height: Dimensions.get("window").height,
      }}
    >
      {children}
    </SwipeablePanel>
  );
};

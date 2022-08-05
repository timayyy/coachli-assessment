import { useRef, useState } from "react";
import { MenuOptions } from "components/menu-option";
import { Dots } from "styles/table/table";

export const RowDots = ({ options, optionsFns }) => {
   const [rowMenuVisibility, setRowMenuVisibility] = useState(false);
   const rowMenuRef = useRef(null);

   return (
      <div
         style={{ position: "relative" }}
         ref={rowMenuRef}
         tabIndex={0}
         role="button"
         onClick={() => setRowMenuVisibility(!rowMenuVisibility)}
         onKeyDown={() => setRowMenuVisibility(!rowMenuVisibility)}
      >
         <Dots />
         <MenuOptions
            left="-120px"
            top="40px"
            ref={rowMenuRef}
            visible={rowMenuVisibility}
            onClose={() => setRowMenuVisibility(false)}
            options={options}
            optionsFns={optionsFns}
         />
      </div>
   );
};

RowDots.displayName = "RowDots";

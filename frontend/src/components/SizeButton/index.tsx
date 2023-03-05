interface SizeButtonProps {
    size: string;
    selected: boolean;
}

const SizeButton : React.FC<SizeButtonProps> = ({ size, selected }) => {
    return (
        <div
              style={
                selected
                  ? { borderColor: "#fc6e20", backgroundColor: "#fc6e20", color: "white" }
                  : {}
              }
              className="p-[10px] border-2 border-[#c8c8ca] rounded-[10px] font-medium cursor-pointer"
            >
              {size}
            </div>
    );
}

export default SizeButton;
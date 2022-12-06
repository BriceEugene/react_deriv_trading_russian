import ListGroup from "react-bootstrap/ListGroup";

const Select_List = ({ items }) => {
  return (
    <ListGroup>
      {items.map((item, key) => (
        <ListGroup.Item
          action
          variant="light"
          bsPrefix="text-black leading-[24px] text-[16px] font-[300] font-['Inter'] list-group-item"
          key={key}
        >
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Select_List;

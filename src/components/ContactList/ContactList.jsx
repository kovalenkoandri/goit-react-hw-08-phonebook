import { deleteContact } from 'redux/phonebook/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectFilter } from 'redux/phonebook/selectors';
import { DeleteIcon } from '@chakra-ui/icons';
import { iconStyles } from 'styles/iconStyles';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const renderContacts = () => {
    return items.filter(el => el.name.includes(filter));
  };
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="teal">
        <TableCaption>Imperial table</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Number</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {renderContacts().map(element => {
            const { id, name, number } = element;
            return (
              <Tr key={id}>
                <Td>{`${name}`}</Td>
                <Td>{`${number}`}</Td>
                <Td>
                  <Button
                    onClick={() => dispatch(deleteContact(id))}
                    colorScheme="teal"
                    size="xs"
                    variant="ghost"
                    rightIcon={<DeleteIcon sx={iconStyles} />}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;

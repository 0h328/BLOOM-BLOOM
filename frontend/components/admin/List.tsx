import * as React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
  Paper,
  Pagination
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material';
import { visuallyHidden } from '@mui/utils';

function createData(shop, name, address, telNo, email) {
  return {
    shop, 
    name, 
    address, 
    telNo, 
    email, 
  };
}

const rows = [
  createData('A플라워', '가ㅇㅇ', '서울특별시 동작구 동작대로23길 7', '010-1111-2345', 'bloombloom@naver.com'),
  createData('B플라워', '나ㅇㅇ', '서울특별시 강남구 압구정로10길 42', '010-2222-2345', 'bloombloom@naver.com'),
  createData('C플라워', '다ㅇㅇ', '경기도 성남시 분당구 황새울로108', '010-3333-2345', 'b1oomb1oom@naver.com'),
  createData('D플라워', '라ㅇㅇ', '경기도 성남시 분당구 판교역로 160', '010-4444-2345', 'bloombloom@naver.com'),
  createData('E플라워', '마ㅇㅇ', '서울특별시 강남구 압구정로10길 42', '010-6666-3232', 'bloombloom@naver.com'),
  createData('F플라워', '바ㅇㅇ', '서울특별시 강남구 압구정로10길 42', '010-5555-2345', 'b1oomb1oom@naver.com'),
  createData('G플라워', '사ㅇㅇ', '서울특별시 강남구 압구정로10길 42', '010-7777-2345', 'bloombloom@naver.com'),
  createData('H플라워', '아ㅇㅇ', '서울특별시 동작구 동작대로23길 7', '010-8888-2345', 'b1oomb1oom@naver.com'),
  createData('I플라워', '자ㅇㅇ', '경기도 성남시 분당구 판교역로 160', '010-9999-1212', 'bloombloom@naver.com'),
  createData('J플라워', '차ㅇㅇ', '경기도 성남시 분당구 판교역로 160', '070-5252-2345', 'b1oomb1oom@naver.com'),
  createData('K플라워', '카ㅇㅇ', '서울특별시 동작구 동작대로23길 7', '010-2345-2345', 'bloombloom@naver.com'),
  createData('L플라워', '타ㅇㅇ', '서울특별시 동작구 동작대로23길 7', '010-5678-2345', 'b1oomb1oom@naver.com'),
  createData('M플라워', '파ㅇㅇ', '서울특별시 동작구 동작대로23길 7', '070-1515-2345', 'bloombloom@naver.com'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'shop', 
    numeric: false,
    disablePadding: true,
    label: '업체명',
  },
  {
    id: 'name', 
    numeric: false,
    disablePadding: false,
    label: '담당자',
  },
  {
    id: 'address', 
    numeric: false,
    disablePadding: false,
    label: '주소',
  },
  {
    id: 'telNo', 
    numeric: false,
    disablePadding: false,
    label: '전화번호',
  },
  {
    id: 'email', 
    numeric: false,
    disablePadding: false,
    label: '이메일',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected}개 선택
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          업체 리스트
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function List() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name'); 
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.shop); 
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, shop) => { 
    const selectedIndex = selected.indexOf(shop); 
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, shop); 
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (shop) => selected.indexOf(shop) !== -1; 


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '85%', height: "800px", position: "absolute", left: "15%"}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.shop); 
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.shop)} 
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.shop} 
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        // scope="row"
                        padding="none"
                      >
                        {row.shop} 
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell> 
                      <TableCell align="left">{row.address}</TableCell> 
                      <TableCell align="left">{row.telNo}</TableCell> 
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        <Link href="/update" passHref>                          
                          <button 
                            style={{ 
                              backgroundColor: "#BAD7DF",
                              border: "0px solid",
                              cursor: "pointer"
                            }}
                          >
                            수정
                          </button>
                        </Link>
                      </TableCell>                      
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ display: "flex", justifyContent: "center"}}
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

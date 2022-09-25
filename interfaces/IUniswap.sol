pragma solidity ^0.8.0;

interface IUniswap {

function addLiquidity(
    address tokenA,
    address tokenB,
    uint256 amountADesired,
    uint256 amountBDesired,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
) external returns(uint256 amountA, uint256 amountB, uint256 liquidity);

 function getPair(address tokenA, address tokenB) external view returns (address pair);

 function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);

}
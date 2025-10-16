// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title SimpleStorage - minimal example contract for Base
contract SimpleStorage {
    uint256 private _value;

    event ValueChanged(uint256 value);

    function set(uint256 newValue) external {
        _value = newValue;
        emit ValueChanged(newValue);
    }

    function get() external view returns (uint256) {
        return _value;
    }
}

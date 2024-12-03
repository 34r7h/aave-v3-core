module.exports = async ({ deployments }) => {
  const { deploy } = deployments;

  await deploy('AaveV3', {
    contract: 'AaveV3',
    from: deployments.getNamedAccounts().deployer,
    args: [],
    log: true,
  });
};

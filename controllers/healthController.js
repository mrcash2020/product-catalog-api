// controllers/healthController.js

// @desc    Get health status
// @route   GET /health
// @access  Public
exports.getHealth = async (req, res) => {
  try {
    res.status(200).json({
      status: 'UP',
      timestamp: new Date(),
      uptime: process.uptime(),
      message: 'Product Catalog API is running'
    });
  } catch (error) {
    res.status(500).json({
      status: 'DOWN',
      timestamp: new Date(),
      error: 'Server Error'
    });
  }
};

// @desc    Get readiness status
// @route   GET /health/ready
// @access  Public
exports.getReadiness = async (req, res) => {
  try {
    // Here you could add additional checks for dependencies
    // like database connection
    res.status(200).json({
      status: 'READY',
      message: 'Service is ready to accept requests',
      timestamp: new Date()
    });
  } catch (error) {
    res.status(503).json({
      status: 'NOT_READY',
      timestamp: new Date(),
      error: 'Service is not ready'
    });
  }
};

// @desc    Get liveness status
// @route   GET /health/live
// @access  Public
exports.getLiveness = async (req, res) => {
  try {
    res.status(200).json({
      status: 'ALIVE',
      message: 'Service is alive',
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({
      status: 'DOWN',
      timestamp: new Date(),
      error: 'Service is down'
    });
  }
};
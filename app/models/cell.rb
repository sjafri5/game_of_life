class Cell
  attr_accessor :x_axis, :y_axis, :alive
  def initialize(x_axis, y_axis)
    @x_axis = x_axis
    @y_axis = y_axis
    @alive = false
  end
end

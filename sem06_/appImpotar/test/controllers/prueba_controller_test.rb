require 'test_helper'

class PruebaControllerTest < ActionDispatch::IntegrationTest
  test "should get inicio" do
    get prueba_inicio_url
    assert_response :success
  end

end

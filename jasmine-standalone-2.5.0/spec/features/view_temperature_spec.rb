require 'spec_helper'

feature "View temperature" do
  scenario "can see temperature as default" do
    visit '/'
    expect(page).to have_content('Happy Friday!')
  end
end

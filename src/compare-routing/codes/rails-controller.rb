class UsersController < ApplicationController
  def index
  end

  def show
    # ...
  end

  def edit
    # ...
  end

  def update
    # ...
  end

  def destroy
    @user = User.find(params[:username])
    ok = @user.destroy

    respond_to do |format|
      format.html {
        if ok
          flash[:notice] = "Delete Success."
          redirect_to :action => 'index'
        else
          flash[:notice] = "Delete Fail."
          render :action => 'edit'
        end
      }
      format.json {
        if ok
          render json => { :status => 200 }.to_json
        else
          render json => { :status => 500 }.to_json
        end
      }
    end

  end
end

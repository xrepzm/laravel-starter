@extends('layouts.app')

@section('title')
  Users
@stop

@section('content')
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-primary">
          <div class="panel-heading">Users</div>
          <div class="panel-body">
            <user-list></user-list>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

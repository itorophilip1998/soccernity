<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCredentialsRequest;
use App\Http\Requests\UpdateCredentialsRequest;
use App\Models\Credentials;

class CredentialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCredentialsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCredentialsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Credentials  $credentials
     * @return \Illuminate\Http\Response
     */
    public function show(Credentials $credentials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Credentials  $credentials
     * @return \Illuminate\Http\Response
     */
    public function edit(Credentials $credentials)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCredentialsRequest  $request
     * @param  \App\Models\Credentials  $credentials
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCredentialsRequest $request, Credentials $credentials)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Credentials  $credentials
     * @return \Illuminate\Http\Response
     */
    public function destroy(Credentials $credentials)
    {
        //
    }
}

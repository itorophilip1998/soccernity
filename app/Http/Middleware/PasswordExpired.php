<?php


namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;

class PasswordExpired
{

public function handle($request, Closure $next)
{
$user = $request->user();
$password_changed_at = new Carbon(($user->password_changed_at));

if (Carbon::now()->diffInDays($password_changed_at) >= 30) {
return redirect()->route('password.expired');
}

return $next($request);
}
}
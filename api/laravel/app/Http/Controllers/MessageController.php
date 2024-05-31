<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Events\NewMessageEvent;

class MessageController extends Controller{


public function store(Request $request)
{
    $message = Message::create([
        'user_id' => auth()->user()->id,
        'content' => $request->content,
    ]);

    event(new NewMessageEvent($message));

    return response()->json($message);
}

}
